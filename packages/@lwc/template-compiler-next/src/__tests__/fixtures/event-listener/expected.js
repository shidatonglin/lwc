import { renderer } from 'lwc';
const { createElement, createComponent } = renderer;

import foo_bar__default from 'foo-bar';

export default function template(context) {
    let div;
    let foo_bar;
    return {
        create() {
            div = createElement("div");
            foo_bar = createComponent("foo-bar", foo_bar__default);
        },
        insert(target, anchor) {
            insert(div, target);
            insert(foo_bar, target);
        },
        update() {
            
        }
    }
}