// Define las variantes de animación
export const bounceAnimation = {
    hidden: { x: "40vw" }, // Inicia más arriba fuera de la pantalla
    visible: {
        y: ["calc(-101vh - 1600px)", "calc(95vh - 1600px)", "calc(90vh - 1600px)"], // Baja al 50vh, sube un 5vh y luego baja un 5vh
        transition: {
            duration: 4, // Duración de la animación
            ease: "easeInOut", // Efecto de rebote
        }
    }
};
export const bounceAnimation2 = {
    hidden: { x: "50vw" }, // Inicia más arriba fuera de la pantalla
    visible: {
        y: ["calc(-101vh - 2800px)", "calc(85vh - 2800px)", "calc(80vh - 2800px)"], // Baja al 50vh, sube un 5vh y luego baja un 5vh
        transition: {
            duration: 5, // Duración de la animación
            ease: "easeInOut", // Efecto de rebote
        }
    }
};

export const heroAnimation = {
    hidden: { opacity: 0, y: -100 }, // Inicia más arriba fuera de la pantalla
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1, // Duración de la animación
            ease: "easeInOut", // Efecto de rebote
        }
    }
};

export const logoVariants = {
    hover: {
        scale: 1.2, // Aumenta el tamaño del logo
        rotate: 360, // Rota el logo 360 grados
        y: -10, // Levanta el logo
        transition: {
            duration: 0.5, // Duración de la animación
        },
    },
};

export const buttonVariants = {
    hover: {
        scale: 1.1, // Aumenta el tamaño del botón
        rotate: [0, -10, 10, -10, 10, 0], // Rota el botón a la izquierda, luego a la derecha, y finalmente vuelve a su rotación original
        y: -10, // Levanta el botón
        transition: {
            duration: 0.5, // Duración de la animación
        },
    },
};
