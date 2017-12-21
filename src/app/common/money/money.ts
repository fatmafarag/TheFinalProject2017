export class themoney{
    id: number;
    Date: string;
    Start: string;
    End: string;
    Tothrs: string;
    Salary: string;

    constructor(Date: string,Start:string, End:string, Tothrs:string, Salary:string)
        {
            this.Date=Date;
            this.Start=Start;
            this.End=End;
            this.Tothrs=Tothrs;
            this.Salary=Salary;

        }
}