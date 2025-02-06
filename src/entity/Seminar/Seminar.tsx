import type { ISeminar } from '@/shared/type/Seminar'

export const Seminar = ({ title, description }: ISeminar) => {
    return (
        <div>
            <span>{title}</span>
            <span>{description}</span>
        </div>
    )
}
