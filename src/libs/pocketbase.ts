import PocketBase from 'pocketbase'

export const pb = new PocketBase(
  process.env.BASE_API ?? process.env.NEXT_PUBLIC_BASE_API
).autoCancellation(false)
