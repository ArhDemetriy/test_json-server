'use client'
import style from './DeleteSeminar.module.scss'
import { useEffect, useRef } from 'react'
import { useUnit } from 'effector-react'
import { $seminarToDelete, resetDeleteSeminar } from './state'
import { deleteSeminarAction } from './api'
import { useRouter } from 'next/navigation'

export const DeleteSeminar = () => {
    const { id, title } = useUnit($seminarToDelete) ?? {}
    const isOpen = id != null

    const ref = useRef<HTMLDialogElement>(null)

    const { refresh } = useRouter()
    const reset = useUnit(resetDeleteSeminar)
    const close = () => {
        ref.current?.close()
        reset()
        refresh()
    }

    const open = () => ref.current?.showModal()

    useEffect(() => {
        isOpen ? open() : close()
    }, [isOpen])
    const onDelete = () => {
        id && deleteSeminarAction(id)
        close()
    }

    return (
        <dialog
            className={style.dialog}
            ref={ref}
        >
            <p>{`Удалить семинар "${title}"?`}</p>
            <div className={style.buttons}>
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    id="delete"
                    type="button"
                    onClick={onDelete}
                >
                    Delete
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
