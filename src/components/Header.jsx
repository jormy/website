import Links from "./Links"
import Pfp from "./Pfp"
import Discord from "./Discord"

function Header() {
    return (
        <>
            <div className="flex justify-between mb-20">
                <div>
                    <h1 className="text-denim-200 font-header text-8xl font-bold w-min relative">
                        jorm
                        <Discord />
                    </h1>
                    <p className="text-2xl py-3 max-w-96  mt-5">rookie dev, currently struggling to program
                    this website.</p>
                    <Links />
                </div>
                <Pfp />
            </div>
        </>
    )
}

export default Header