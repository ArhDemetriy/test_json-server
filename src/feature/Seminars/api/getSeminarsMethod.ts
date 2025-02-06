import { fetchWith } from '@/shared/api/server'
import type { ISeminar } from '@/shared/type/Seminar'

type ISeminars = ISeminar[]
const SEMINARS_PATH = '/seminars'
export const getSeminarsMethod = async () =>
    fetchWith<ISeminars>({ method: 'GET', path: SEMINARS_PATH })
