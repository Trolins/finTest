// add more fields, because i want more info on tab
export class FinanceData{
    public main_active!: YearData[]
    public current_liabilities!: YearData[]
    public net_income!: YearData[]
    public net_profit!: YearData[]
  }

export class YearData {
    public year!: number
    public sum!: number
}
export class ListData {
    public dif_money!: number
    public dif_percent!: number
    public type!: string
    public year!: number
}