import educationItems from "@/data/constants/educationItems";
import { TabsContent } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";

export default function Education() {
  return (
    <TabsContent value="education" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">My education</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
        </p>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-2">
            {educationItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center lg:items-start gap-1"
                >
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-xl max-w[260px] min-h-[60px]">
                    {item.degree}
                  </h3>
                  <div className="flex justify-center items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.institution}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
  );
}
