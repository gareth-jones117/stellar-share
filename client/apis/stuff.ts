import request from 'superagent'

const rootUrl = '/api/v1'

import { StuffWithOwnerName } from '../../models/stuff'

// FRONT END API STUFF FUNCTIONS GO HERE

// export function getFruits(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }

export async function getStuffById(stuffId: number): Promise<StuffWithOwnerName> {
  const res = await request.get(rootUrl + '/stuff/' + stuffId)
  return res.body as StuffWithOwnerName
}
