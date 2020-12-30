/**
 * Function used to expand a string and respect line delimeters in react rendered text.
 * Depending on how your new lines are delimited, this functionality may need to be changed.
 *
 * @param {text} text The text being expanded to include line break delimiters.
 * @param {delimiter} delimiter The character sequence used as the delimiter.
 */
export const ExpandLineBreakDelimiters = (text, delimiter) => {
    return text
        .split(delimiter)
        .map((x, i) => (x !== '' ? <p key={i}>{x}</p> : <br key={i} />));
};
