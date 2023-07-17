import { FC } from "react";
import EmploymentCards from "./EmploymentCards";

interface BeautifulEmploymentProps {}

const BeautifulEmployment: FC<BeautifulEmploymentProps> = ({}) => {
  return (
    <section className="mb-2 p-3 md:p-16 ">
      <h1 className="text-xl font-semibold mb-2">Employment</h1>
      <EmploymentCards />
    </section>
  );
};

export default BeautifulEmployment;
