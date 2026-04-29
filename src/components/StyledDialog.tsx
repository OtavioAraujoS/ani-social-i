import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogTitleStyled } from "./DialogTitleStyled";

export function StyledDialog({
  childrenButton,
  children,
  title,
  description,
  descriptionReason,
}: {
  childrenButton: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
  descriptionReason: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{childrenButton}</DialogTrigger>
      <DialogContent className="md:max-w-7xl w-[calc(100%-2rem)] p-0 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          {descriptionReason}
        </DialogDescription>
        <DialogTitleStyled
          title={title}
          description={description}
          descriptionReason={descriptionReason}
        >
          {children}
        </DialogTitleStyled>
      </DialogContent>
    </Dialog>
  );
}
