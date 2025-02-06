'use client'
import style from './EditSeminar.module.scss'
import { useEffect, useRef } from 'react'
import { useUnit } from 'effector-react'
import { $seminarToEdit, resetEditSeminar } from './state'
import { editSeminarAction } from './api'
import { useRouter } from 'next/navigation'

export const EditSeminar = () => {
    const { title, description, photo, date, time, id } = useUnit($seminarToEdit) ?? {}
    const isOpen = id != null

    const ref = useRef<HTMLDialogElement>(null)
    const { refresh } = useRouter()

    const reset = useUnit(resetEditSeminar)
    const close = () => {
        ref.current?.close()
        reset()
        refresh()
    }

    const formRef = useRef<HTMLFormElement>(null)
    const open = () => {
        formRef.current?.reset()
        ref.current?.showModal()
    }

    useEffect(() => {
        isOpen ? open() : close()
    }, [isOpen])

    const save = () => {
        if (!formRef.current || id == null) return close()

        const data = Object.assign(
            Object.fromEntries(
                Array.from(new FormData(formRef.current).entries()).map(([key, value]) => [
                    key,
                    value.toString(),
                ]),
            ),
            { id },
        )

        editSeminarAction(data)
        close()
    }

    const renderItems = { title, description, photo, date, time }

    if (!isOpen) return null
    return (
        <dialog
            className={style.dialog}
            ref={ref}
        >
            <p>{`Изменение семинара "${title}"?`}</p>

            <form
                ref={formRef}
                className={style.form}
            >
                {Object.entries(renderItems).map(([title, value]) => (
                    <EditInput
                        title={title}
                        value={value}
                        key={title}
                    />
                ))}
            </form>
            <div className={style.buttons}>
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    type="button"
                    onClick={close}
                >
                    Cancel
                </button>
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    id="Edit"
                    type="button"
                    onClick={save}
                >
                    Save
                </button>
            </div>
        </dialog>
    )
}

interface IEditInput {
    title?: string
    value?: string
}
const EditInput = ({ title = '', value = '' }: IEditInput) => (
    <label>
        {title}:{' '}
        <input
            type="text"
            name={title}
            defaultValue={value}
        />
    </label>
)
