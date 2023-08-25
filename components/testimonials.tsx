import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsProps {
  testimonials: {
    quote: string;
    name: string;
    avatar: string;
  }[];
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((testimonial, i) => (
        <div
          className="h-full w-full border rounded-lg p-4 flex flex-col animate-fade-in-faster"
          key={testimonial.name}
        >
          <div className="flex justify-center items-center grow">
            <p className="font-sans text-sm/6 text-muted-foreground">
              &quot;{testimonial.quote}&quot;
            </p>
          </div>

          <Separator className="my-2" />

          <div className="flex flex-row justify-end gap-2 p-2 items-center">
            <p className="text-left text-muted-foreground">
              {testimonial.name}
            </p>
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>
                {testimonial.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonials;
