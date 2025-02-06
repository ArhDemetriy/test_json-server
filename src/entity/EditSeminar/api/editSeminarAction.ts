'use server'

import { ISeminar } from '@/shared/type/Seminar'
import { editSeminarMethod } from './editSeminarMethod'

export const editSeminarAction = async (id: ISeminar['id']) => editSeminarMethod(id)
