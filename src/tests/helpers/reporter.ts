// The file is import to use in this file
import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import SuiteInfo = jasmine.JasmineStartedInfo;
class CustomProcessor extends DisplayProcessor {
  public override displayJasmineStarted(_info: SuiteInfo, log: string): string {
    return `TypeScript${log}`;
  }
}
// then clear of reporter
jasmine.getEnv().clearReporters();
// then add the new reporter
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  }),
);
