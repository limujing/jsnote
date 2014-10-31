String.prototype.subs = function(var_args) {
  var ret = this;
  for(var i = 0; i < arguments.length; i++) {
    ret = ret.replace(/\%s/, String(arguments[i]));
  }
  return ret;
};

function assert(expr, m) {

  var msg = "";

  if(!expr){
    if(isString(m)) {
      msg = m;
    }else if(isFunction(m)) {
      msg = m();
    }else {
      msg = 'Assertion failed';
    }

    throw new MyException(msg);
  }

}

function assertEqual(expected, actual, m) {
  function generateMessage() {
    var message = 'Expected: %s (%s), actual: %s (%s)'.subs(expected, typeof expected, actual, typeof actual);
    return formatErrorMessage(message, m);
  }

  assert(expected == actual, generateMessage);
}

function assertNotEqual(unexpected, actual, m) {
  function generateMessage() {
    var message = 'Expected value other than "%s" (%s)'.subs(unexpected, typeof unexpected);
    return formatErrorMessage(message, m);
  }

  assert(unexpected != actual, generateMessage);
}

function assertNull(val, m) {
  assert(val === null, function() {
    var message = "Expected null value.";
    return formatErrorMessage(message, m);
  });
}

function assertNotNull(val, m) {
  assert(val !== null, function() {
    var message = "Unexpected null value.";
    return formatErrorMessage(message, m);
  });
}

function MyException(message){
  this.message = message;
}