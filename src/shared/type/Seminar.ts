export interface ISeminar {
    /**
     * @example 1
     */
    id: number
    /**
     * @example "Новинки Kosmoteros"
     */
    title: string
    /**
     * @example "Обзор новых средств и методик от Kosmoteros."
     */
    description: string
    /**
     * @example "01.02.2025"
     */
    date: string
    /**
     * @example "10:00"
     */
    time: string
    /**
     * @example "https://picsum.photos/id/1/750/730"
     */
    photo: string
}
