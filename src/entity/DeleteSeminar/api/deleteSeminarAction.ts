'use server'

import { ISeminar } from '@/shared/type/Seminar'
import { deleteSeminarMethod } from './deleteSeminarMethod'

export const deleteSeminarAction = async (id: ISeminar['id']) => deleteSeminarMethod(id)
