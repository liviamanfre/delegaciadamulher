import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  linkTo: string;
}

const ServiceCard = ({ title, description, icon: Icon, linkTo }: ServiceCardProps) => {
  return (
    <Card className="p-6 card-hover bg-white">
      <div className="flex flex-col items-start gap-4 h-full">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-mulher-100 rounded-lg">
            <Icon className="h-6 w-6 text-mulher-700" />
          </div>
          <h3 className="text-lg font-semibold text-mulher-800">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-auto">
          <Link to={linkTo} className="text-mulher-700 font-semibold hover:underline">Saiba mais</Link>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
