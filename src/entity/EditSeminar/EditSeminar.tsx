'use client'
import style from './EditSeminar.module.scss'
import { useEffect, useRef } from 'react'
import { useUnit } from 'effector-react'
import { $seminarToEdit, resetEditSeminar } from './state'
import { editSeminarAction } from './api'

export const EditSeminar = () => {
    const { id, title } = useUnit($seminarToEdit) ?? {}
    const isOpen = id != null

    const ref = useRef<HTMLDialogElement>(null)

    const reset = useUnit(resetEditSeminar)
    const close = () => {
        ref.current?.close()
        reset()
    }

    const open = () => ref.current?.showModal()

    useEffect(() => {
        isOpen ? open() : close()
    }, [isOpen])

    const onEdit = () => {
        id && editSeminarAction(id)
        close()
    }

    return (
        <dialog
            className={style.dialog}
            ref={ref}
        >
            <p>{`Удалить семинар "${title}"?`}</p>
            <div className="flex">
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    id="Edit"
                    type="button"
                    onClick={onEdit}
                >
                    Edit
                </button>
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    type="button"
                    onClick={close}
                >
                    Cancel
                </button>
            </div>
        </dialog>
    )
}
