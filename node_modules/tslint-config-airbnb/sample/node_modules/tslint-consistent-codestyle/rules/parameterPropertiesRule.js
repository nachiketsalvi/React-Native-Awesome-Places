"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var utils = require("tsutils");
var rules_1 = require("../src/rules");
var ALL_OR_NONE_OPTION = 'all-or-none';
var LEADING_OPTION = 'leading';
var TRAILING_OPTION = 'trailing';
var READONLY_OPTION = 'readonly';
var MEMBER_ACCESS_OPTION = 'member-access';
var ALL_OR_NONE_FAIL = 'don\'t mix parameter properties with regular parameters';
var LEADING_FAIL = 'parameter properties must precede regular parameters';
var TRAILING_FAIL = 'regular parameters must precede parameter properties';
var READONLY_FAIL = 'parameter property must be readonly';
var MEMBER_ACCESS_FAIL = 'parameter property must have access modifier';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new ParameterPropertyWalker(sourceFile, this.ruleName, {
            allOrNone: this.ruleArguments.indexOf(ALL_OR_NONE_OPTION) !== -1,
            leading: this.ruleArguments.indexOf(LEADING_OPTION) !== -1,
            trailing: this.ruleArguments.indexOf(TRAILING_OPTION) !== -1,
            readOnly: this.ruleArguments.indexOf(READONLY_OPTION) !== -1,
            memberAccess: this.ruleArguments.indexOf(MEMBER_ACCESS_OPTION) !== -1,
        }));
    };
    return Rule;
}(rules_1.AbstractConfigDependentRule));
exports.Rule = Rule;
var ParameterPropertyWalker = (function (_super) {
    tslib_1.__extends(ParameterPropertyWalker, _super);
    function ParameterPropertyWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParameterPropertyWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (node.kind === ts.SyntaxKind.Constructor)
                _this._checkConstructorDeclaration(node);
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    ParameterPropertyWalker.prototype._checkConstructorDeclaration = function (node) {
        var parameters = node.parameters;
        var length = parameters.length;
        if (length === 0)
            return;
        var index = -1;
        for (var i = 0; i < length; ++i) {
            if (utils.isParameterProperty(parameters[i])) {
                index = i;
                break;
            }
        }
        if (index === -1)
            return;
        if (this.options.allOrNone) {
            var start = parameters[0].getStart(this.getSourceFile());
            var end = parameters[parameters.length - 1].getEnd();
            if (index > 0) {
                this.addFailure(start, end, ALL_OR_NONE_FAIL);
            }
            else {
                for (var i = index + 1; i < length; ++i) {
                    if (!utils.isParameterProperty(parameters[i])) {
                        this.addFailure(start, end, ALL_OR_NONE_FAIL);
                        break;
                    }
                }
            }
        }
        else if (this.options.leading) {
            var regular = index > 0;
            for (var i = index; i < length; ++i) {
                if (utils.isParameterProperty(parameters[i])) {
                    if (regular)
                        this.addFailureAtNode(parameters[i], LEADING_FAIL);
                }
                else {
                    regular = true;
                }
            }
        }
        else if (this.options.trailing) {
            for (var i = index; i < length; ++i)
                if (!utils.isParameterProperty(parameters[i]))
                    this.addFailureAtNode(parameters[i], TRAILING_FAIL);
        }
        if (this.options.memberAccess) {
            for (var i = index; i < length; ++i) {
                var parameter = parameters[i];
                if (utils.isParameterProperty(parameter) && !utils.hasAccessModifier(parameter))
                    this.addFailureAtNode(parameter, MEMBER_ACCESS_FAIL);
            }
        }
        if (this.options.readOnly) {
            for (var i = index; i < length; ++i) {
                var parameter = parameters[i];
                if (utils.isParameterProperty(parameter) && !utils.hasModifier(parameter.modifiers, ts.SyntaxKind.ReadonlyKeyword))
                    this.addFailureAtNode(parameter, READONLY_FAIL);
            }
        }
    };
    return ParameterPropertyWalker;
}(Lint.AbstractWalker));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyUHJvcGVydGllc1J1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXJhbWV0ZXJQcm9wZXJ0aWVzUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBaUM7QUFDakMsNkJBQStCO0FBQy9CLCtCQUFpQztBQUVqQyxzQ0FBMkQ7QUFFM0QsSUFBTSxrQkFBa0IsR0FBRyxhQUFhLENBQUM7QUFDekMsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQztBQUNuQyxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUM7QUFDbkMsSUFBTSxvQkFBb0IsR0FBRyxlQUFlLENBQUM7QUFFN0MsSUFBTSxnQkFBZ0IsR0FBRyx5REFBeUQsQ0FBQztBQUNuRixJQUFNLFlBQVksR0FBRyxzREFBc0QsQ0FBQztBQUM1RSxJQUFNLGFBQWEsR0FBRyxzREFBc0QsQ0FBQztBQUM3RSxJQUFNLGFBQWEsR0FBRyxxQ0FBcUMsQ0FBQztBQUM1RCxJQUFNLGtCQUFrQixHQUFHLDhDQUE4QyxDQUFDO0FBbUIxRTtJQUEwQixnQ0FBMkI7SUFBckQ7O0lBVUEsQ0FBQztJQVRVLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9FLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUQsUUFBUSxFQUFFLElBQUksQ0FBQyxh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