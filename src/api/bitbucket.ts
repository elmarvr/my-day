import { useQuery } from '@tanstack/vue-query'

async function asyncMap<T, U>(array: T[], callback: (item: T) => Promise<U>) {
  const result = await Promise.all(array.map(callback))

  return result.flat()
}

export async function bitbucketRequest<T>(url: string, init?: RequestInit) {
  const authToken = btoa(`elmarvriet:${import.meta.env.VITE_BITBUCKET_PASSWORD}`)

  const response = await fetch(`https://api.bitbucket.org/2.0${url}`, {
    ...init,
    headers: {
      Authorization: `Basic ${authToken}`,
      Accept: 'application/json',
      ...init?.headers
    }
  })

  return response.json() as Promise<{
    values: T[]
  }>
}

export type Repository = {
  name: string
}

function getRepositories() {
  return bitbucketRequest<Repository>('/repositories/viatim')
}

export type PullRequest = {
  title: string
  links: {
    html: {
      href: string
    }
  }
}

function getRepositoryPullrequests(repository: string) {
  return bitbucketRequest<PullRequest>(`/repositories/viatim/${repository}/pullrequests`)
}

export async function getPullrequestsReview() {
  const repositories = await getRepositories()

  const result = await asyncMap(repositories.values, async (repository) => {
    const pullrequests = await getRepositoryPullrequests(repository.name)

    return pullrequests.values
  })

  return result.flat()
}

export async function getPullrequestsUser() {
  const pullrequests = await bitbucketRequest<PullRequest>('/pullrequests/elmarvriet')

  return pullrequests.values
}
