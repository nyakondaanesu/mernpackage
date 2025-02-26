import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
const FetchedData = () => {
  type Data = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const [data, setData] = useState<Data | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api");
      const json = await response.json();
      if (response.ok) {
        setData(json);
        console.log(json);
      }
    };

    fetchData();

    console.log(`data is ${data}`);
  }, []);
  return (
    <>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">
            data from json placeholder api
          </p>
          <small className="text-default-500">
            1. Go to /backend/routes and start creating your own api!!
          </small>
          <small className="text-default-500">
            2.create your mongodb database and add your connection string!!
          </small>
          <h4 className="font-bold text-large">Title : {data?.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible flex justify-center py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default FetchedData;
