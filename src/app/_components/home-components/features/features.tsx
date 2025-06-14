import Image from "next/image";

export const Features = () => {
  return (
    <div className="container flex flex-wrap justify-between gap-5 text-lg *:flex *:min-w-[45%] *:flex-1 *:flex-col-reverse *:items-center *:justify-center *:gap-2 *:lg:min-w-fit *:lg:flex-row">
      <div className="">
        <p className="whitespace-nowrap">پشتیبانی 24 ساعته</p>
        <Image alt="" width={72} height={72} src="/images/features/1.svg" />
      </div>
      <div className="">
        <p className="whitespace-nowrap">تحویل سریع</p>
        <Image alt="" width={72} height={72} src="/images/features/2.svg" />
      </div>
      <div className="">
        <p className="whitespace-nowrap">ضمانت کالا</p>
        <Image alt="" width={72} height={72} src="/images/features/3.svg" />
      </div>
      <div className="">
        <p className="whitespace-nowrap">جدیدترین تکنولوژی</p>
        <Image alt="" width={72} height={72} src="/images/features/4.svg" />
      </div>
    </div>
  );
};
