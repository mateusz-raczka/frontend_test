export type InputRadioProps = {
    name: string,
    value: string,
    id: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}