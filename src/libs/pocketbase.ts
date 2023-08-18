import PocketBase from 'pocketbase'

export const pb = new PocketBase(
  'https://frontchapter-magic.iran.liara.run'
).autoCancellation(false)
