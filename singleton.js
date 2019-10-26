/**
 * The Singleton Pattern
 * Used when you want to have one point of access to a resource 
 * eg The database.
 * If an instance of the object exists it will return that and if it doesn't,
 * a new instance of the singleton will be returned.
 * Not always the best method of writing something however it can be of use if used wisely.
 * Few negatives about a singleton would be:
 * 1.) It acts as a Global variable.
 * 2.) Can make code more tightly coupled that it should be. harder for testing etc.
 * 3.) Carries state for the lifetime of the app. So its hard again to write tests for this.
 * More info here: http://misko.hevery.com/2008/08/17/singletons-are-pathological-liars/
 * 
 * An ok reason to use the singleton would be if it can only have a single instance available
 * and something needs to manage that instance. The redux system is essentially a singleton pattern.
 * Access to a log file system would be a quite a good use. 
 */

class Logfile {
  constructor() {
    if (Logfile.exists) {
      return Logfile.instance;
    }
    this.__log = [];
    Logfile.instance = this;
    Logfile.exists = true;
    return this;
  }

  getLogs() {
    return this.__log;
  }

  addLog(log) {
    this.__log.push(log);
  }
} 

const httpdProcess1 = new Logfile();
httpdProcess1.addLog('httpd process 1 error.....Arghhh Everything is down!!!...');
console.log(httpdProcess1.getLogs());

const httpdProcess2 = new Logfile();
httpdProcess2.addLog('httpd 2 running out of memory.....slowwing down!!...');
console.log(httpdProcess2.getLogs()); // Wont create a new instance it just shows the previous log.