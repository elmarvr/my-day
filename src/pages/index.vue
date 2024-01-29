<script setup lang="ts">
import { getPullrequestsReview, getPullrequestsUser } from '~/api/bitbucket'

const { data: pullrequestsUser } = useQuery({
  queryKey: ['pullrequests', 'user'],
  queryFn: getPullrequestsUser
})

const { data: pullrequestsReview } = useQuery({
  queryKey: ['pullrequests', 'review'],
  queryFn: getPullrequestsReview
})

const selected = ref(['review'])
</script>

<template>
  <main class="container py-8">
    <div class="mx-auto w-full max-w-lg">
      <ui-accordion multiple v-model="selected">
        <ui-accordion-item value="review">
          <ui-accordion-trigger>Pull Requests to review</ui-accordion-trigger>
          <ui-accordion-content>
            <ul class="divide-y">
              <li v-for="pullrequest in pullrequestsReview" :key="pullrequest.title">
                <a class="block py-2 hover:underline" :href="pullrequest.links.html.href">
                  {{ pullrequest.title }}
                </a>
              </li>
            </ul>
          </ui-accordion-content>
        </ui-accordion-item>
        <ui-accordion-item value="user">
          <ui-accordion-trigger>My pull request</ui-accordion-trigger>
          <ui-accordion-content>
            <ul class="divide-y">
              <li v-for="pullrequest in pullrequestsUser" :key="pullrequest.title">
                <a class="block py-2 hover:underline" :href="pullrequest.links.html.href">
                  {{ pullrequest.title }}
                </a>
              </li>
            </ul>
          </ui-accordion-content>
        </ui-accordion-item>
      </ui-accordion>
    </div>
    <!-- <ul >
      <li v-for="pullrequestList in pullrequestLists" :key="pullrequestList.title">
        <h2>{{ pullrequestList.title }}</h2>
        <ul class="divide-y">
          <li v-for="pullrequest in pullrequestList.items" :key="pullrequest.title">
            <a class="block p-3 hover:bg-neutral-50" :href="pullrequest.links.html.href">
              {{ pullrequest.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul> -->
  </main>
</template>
