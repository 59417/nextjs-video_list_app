import classes from '../TagsBody.module.css';

export function getClass(number) {
    const n = number % 24
    if (n === 0) {
        return classes.style0;
    } else if (n === 1) {
        return classes.style1;
    } else if (n === 2) {
        return classes.style2;
    } else if (n === 3) {
        return classes.style3;
    } else if (n === 4) {
        return classes.style4;
    } else if (n === 5) {
        return classes.style5;
    } else if (n === 6) {
        return classes.style6;
    } else if (n === 7) {
        return classes.style7;
    } else if (n === 8) {
        return classes.style8;
    } else if (n === 9) {
        return classes.style9;
    } else if (n === 10) {
        return classes.style10;
    } else if (n === 11) {
        return classes.style11;
    } else if (n === 12) {
        return classes.style12;
    } else if (n === 13) {
        return classes.style13;
    } else if (n === 14) {
        return classes.style14;
    } else if (n === 15) {
        return classes.style15;
    } else if (n === 16) {
        return classes.style16;
    } else if (n === 17) {
        return classes.style17;
    } else if (n === 18) {
        return classes.style18;
    } else if (n === 19) {
        return classes.style19;
    } else if (n === 20) {
        return classes.style20;
    } else if (n === 21) {
        return classes.style21;
    } else if (n === 22) {
        return classes.style22;
    } else if (n === 23) {
        return classes.style23;
    } else {
        return classes.style24;
    };
};
