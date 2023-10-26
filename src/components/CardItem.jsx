export default function CardItem({ pokemon }) {
  const { id, name, image, type, hp, attack, defense, speed, sp_atk, sp_def } =
    pokemon;
  return (
    <div className="p-4 m-8">
      <div className="flex items-center justify-center">
        <div className="w-full overflow-hidden flex justify-center items-center ring-8 ring-[#252436BF] bg-[#B8693E] shadow-md">
          <div className="bg-[url('https://i.imgur.com/DNVGE5B.png')] bg-repeat w-full">
            <div className="mx-4 mt-2 flex justify-between items-center shadow-md border-2 px-2 rounded-[2px] border-opacity-50  border-t-teal-50 border-l-teal-50  border-b-black border-r-black">
              <span className="font-bold text-lg">{name}</span>
            </div>
            <div className="mx-auto mb-6 rounded-[1px] ring-4 my-4 h-[243px] w-[260px] shadow-lg shadow-black ring-offset-0 ring-[#808080] p-2 bg-white">
              <img
                className="w-full h-full"
                src={image}
                alt="Bulbasaur"
                width={360}
                height={336}
              />
            </div>
            <div className="mx-4">
              <div className="bg-slate-200 mx-1 px-1 ring-4 ring-[#FFC85F]">
                <h1 className="font-bold">[{type.toString()}]</h1>
                <p className="text-[10px]">
                  <span className="underline block">Special skills:</span>
                  <span>
                    Speed/{speed}, Attack speed/{sp_atk}, Defense speed/{sp_def}
                  </span>
                </p>
                <hr className="h-1 bg-black" />
                <div className="flex items-center justify-between">
                  <span>HP/{hp}</span>
                  <div className="flex justify-end items-center gap-2">
                    <span>ATK/{attack}</span>
                    <span>DEF/{defense}</span>
                  </div>
                </div>
              </div>
              <span className="text-[9px]">{id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
