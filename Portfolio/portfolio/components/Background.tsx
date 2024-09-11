import GridPattern from "./magicui/animated-grid-pattern";

export default function Background() {
    return (

        <div className="fixed inset-0 -z-10 bg-[#060d1e]">
            <GridPattern
            width={80}
            height={80}
            maxOpacity={0.08}
            numSquares={30}
            duration={6}
            repeatDelay={0.5}
            className="fill-current text-slate-500 stroke-gray-900"
        />
        </div>
    )
}