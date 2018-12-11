"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var utils = require("tsutils");
function isUndefined(expression) {
    return utils.isIdentifier(expression) && expression.text === 'undefined' ||
        expression.kind === ts.SyntaxKind.VoidExpression;
}
exports.isUndefined = isUndefined;
function isElseIf(node) {
    var parent = node.parent;
    return utils.isIfStatement(parent) &&
        parent.elseStatement === node;
}
exports.isElseIf = isElseIf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFpQztBQUNqQywrQkFBaUM7QUFFakMscUJBQTRCLFVBQXlCO0lBQ2pELE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssV0FBVztRQUNwRSxVQUFVLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO0FBQ3pELENBQUM7QUFIRCxrQ0FHQztBQUVELGtCQUF5QixJQUFvQjtJQUN6QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQztBQUN2QyxDQUFDO0FBSkQsNEJBSUMifQ==