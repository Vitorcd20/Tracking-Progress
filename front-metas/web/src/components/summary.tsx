import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-BR";
import { CheckCircle2, Plus } from "lucide-react";
import { getSummary } from "../http/get-summary";
import { OrbitIcon } from "./orbit-icon";
import { PendingGoals } from "./pending-goals";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";

dayjs.locale(ptBr);

export function Summary() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 sec
  });

  if(!data) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
  const lastDatOfWeek = dayjs().endOf("week").format("D MMM");


  const completedPorcentage = Math.round(data?.completed * 100 / data?.total)

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <OrbitIcon />
          <span className="text-large font-bold capitalize">{firstDayOfWeek} - {lastDatOfWeek}</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: `${completedPorcentage}%` }} />
        </Progress>
      </div>

      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          Você completou <span className="text-zinc-100">{data?.completed}</span> de{" "}
          <span className="text-zinc-100">{data?.total}</span> metas
        </span>
        <span>{completedPorcentage}%</span>
      </div>

      <Separator />

      <PendingGoals />

      {Object.entries(data.goalsPerDay).map(([date, goals]) => {
        const weekDay = dayjs(date).format('dddd')
        const formattedDate = dayjs(date).format('D [de] MMMM')

        return (
          <div key={date} className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            <span className="capitalize">{weekDay}</span>{" "}
            <span className="text-zinc-400 text-xs">{formattedDate}</span>
          </h3>

          <ul className="flex flex-col gap-3">
           {goals.map((goal => {
            const time = dayjs(goal.completedAt).format('HH:mm')
            return (
               <li key={goal.id} className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Voce completou{" "}
                <span className="text-zinc-100">{goal.title}</span> às{" "}
                <span className="text-zinc-100">{time}h</span>
              </span>
            </li>
            )
           }))}
          </ul>
        </div>
      
      </div>
        )
      })}
    </div>
  );
}
