'use server'

import { editSeminarMethod } from './editSeminarMethod'

export const editSeminarAction = async (body: Parameters<typeof editSeminarMethod>['0']) =>
    editSeminarMethod(body)
