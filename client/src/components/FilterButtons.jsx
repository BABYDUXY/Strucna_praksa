import { useState, useEffect } from "react";

function FilterButtons({ setUrl }) {
  const [filter,setFilter]=useState("");

  return (
    <div class="w-full h-min grid grid-cols-[20%_1fr_20%] relative items-center ">
      <h2 class="text-xl col-start-2 row-start-1">{(filter =='') ? (''):("Filter:") } {filter}</h2>
      <ul class="col-start-2 mb-10 row-start-1 overflow-hidden [&>li]:inline-block justify-self-center self-center h-min">
        <li>
          <button
            class="transition-all duration-200 ease-in-out hover:p-[0.5rem_1.5rem] rounded-md p-[0.5rem_1rem] border border-black"
            onClick={() => {
              setUrl("http://localhost:5000/");
              setFilter("");
            }}
          >
            Sve
          </button>
        </li>

        <li class="group">
          <button class="transition-all duration-200 ease-in-out group-hover:p-[0.5rem_1.5rem] rounded-md p-[0.5rem_1rem] border border-black ">
            vrsta
          </button>
          <div class=" opacity-0 flex w-0 overflow-hidden group-hover:w-auto group-hover:opacity-100 flex-col absolute z-50 bg-white transition-all duration-300 ease-in-out [&>*]:transition-colors [&>*]:duration-300 [&>*]:ease-in-out">
            <button
              class=" hover:bg-slate-300 p-[0.5rem_1rem] border border-black"
              onClick={() => {
                setUrl("http://localhost:5000/plave");
                setFilter("Plave");
              }}
            >
              Plave
            </button>
            <button
              class=" hover:bg-slate-300 p-[0.5rem_1rem] border border-black"
              onClick={() => {
                setUrl("http://localhost:5000/bijele");
                setFilter("Bijele");
              }}
            >
              Bijele
            </button>
            <button
              class=" hover:bg-slate-300 p-[0.5rem_1rem] border border-black"
              onClick={() => {
                setUrl("http://localhost:5000/otrovne");
                setFilter("otrovne");
              }}
            >
              Otrovne
            </button>
          </div>
        </li>

        <li class="group">
          <button
            class="transition-all duration-200 ease-in-out rounded-md group-hover:p-[0.5rem_1.5rem] p-[0.5rem_1rem] border border-black"
          >
            Težina
          </button>
          <div class=" opacity-0 flex w-0 overflow-hidden group-hover:w-auto group-hover:opacity-100 flex-col absolute z-50 bg-white transition-all duration-300 ease-in-out [&>*]:transition-colors [&>*]:duration-300 [&>*]:ease-in-out">
            <button
              class=" hover:bg-slate-300 p-[0.5rem_1rem] border border-black"
              onClick={() => {
                setUrl("http://localhost:5000/tezinaASC");
                setFilter("Tezina A-Z");
              }}
            >
              A-Z
            </button>
            <button
              class=" hover:bg-slate-300 p-[0.5rem_1rem] border border-black"
              onClick={() => {
                setUrl("http://localhost:5000/tezinaDESC");
                setFilter("Tezina Z-A");
              }}
            >
              Z-A
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FilterButtons;
