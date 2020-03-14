import { renderer } from 'lwc';
const { createElement, addListener, createComponent } = renderer;

import foo_bar__default from 'foo-bar';

export default function template(context) {
    let div;
    let foo_bar;
    return {
        create() {
            div = createElement("div");
            addListener(div, "click", context.handleClick);
            foo_bar = createComponent("foo-bar", foo_bar__default);
            addListener(foo_bar, "click", context.handleClick);
        },
        insert(target, anchor) {
            insert(div, target);
            insert(foo_bar, target);
        },
        update() {
            
        }
    }
}