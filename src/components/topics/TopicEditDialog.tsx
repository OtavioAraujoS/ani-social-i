import { StyledDialog } from "../StyledDialog";
import { TopicForm } from "./TopicForm";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { IAnime } from "@/interfaces/IAnime";
import { CreateTopic } from "./TopicSchema";

export function TopicEditDialog({
  animes,
  initialData,
  topicId,
}: {
  animes: IAnime[];
  initialData?: CreateTopic;
  topicId?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <StyledDialog
      title="Modulo de Tópico"
      description="Atualizar"
      descriptionReason="Tópico"
      childrenButton={
        <button className="cursor-pointer text-yellow-500 hover:text-yellow-600 transition-colors">
          <Pencil className="w-5 h-5" />
        </button>
      }
    >
      <TopicForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        animes={animes}
        initialData={initialData}
        topicId={topicId}
        isEditing
      />
    </StyledDialog>
  );
}
