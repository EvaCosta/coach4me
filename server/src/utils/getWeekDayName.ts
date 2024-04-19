export default function getWeekDayName(weekDay: number): string {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    return daysOfWeek[weekDay];
}
