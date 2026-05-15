import { motion } from "framer-motion";

export const sentenceVariants = {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 1 } } }
};

export const Typewriter = ({ text, ...rest }) => (
    <motion.p
        key={text}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        repeat="infinity"

        {...rest}

    >
        {text.split("").map((char, i) => (
       
            <motion.span  transition={{repeat:Infinity}}  key={`${char}-${i}`} variants={letterVariants}>
                {char}
            </motion.span>
        ))}
    </motion.p>
);