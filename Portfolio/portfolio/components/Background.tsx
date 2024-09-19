import GridPattern from "./magicui/animated-grid-pattern";

export default function Background() {
    return (

        <div className="fixed inset-0 -z-10 bg-black">
            <GridPattern
            width={40}
            height={40}
            maxOpacity={0.008}
            numSquares={30}
            duration={6}
            repeatDelay={0.5}
            className="fill-current text-slate-500 stroke-gray-900"
        />
        </div>
    )
}