import Image from "next/image"
import { NavBarLink } from "./NavBarLink"

export const NavBar = () => {
    return (
        <nav className="w-full bg-slate-50 shadow-lg p-2 flex fixed">
            <div className="flex w-3/4 mx-auto justify-between">
                <div className="flex">
                    <Image
                        src="/logo.png" // Ruta a tu imagen
                        alt="Descripción de la imagen" // Texto alternativo para la imagen
                        width={50} // Ancho de la imagen
                        height={0} // Altura de la imagen
                    />
                    <h1 className="text-[#3ac968] text-3xl my-auto">NutriFeel</h1>
                </div>
                <div className="flex">
                    <div className="flex justify-between">
                        <ul className="flex justify-around">
                            <NavBarLink className="mx-8 my-auto">Inicio</NavBarLink>
                            <NavBarLink className="mx-8 my-auto">Sobre Nosotros</NavBarLink>
                            <NavBarLink className="mx-8 my-auto">Contacto</NavBarLink>
                        </ul>
                    </div>
                    <div className="flex justify-around">
                        <a href="#" className="shadow-lg border border-[#3ac968] text-[#3ac968] rounded-md mx-4 px-4 py-1 my-auto">Iniciar Sesión</a>
                        <a href="#" className="shadow-lg bg-[#3ac968] text-white rounded-md mx-4 px-4 py-1 my-auto">Registrarse</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}