import { Test, TestingModule } from '@nestjs/testing'
import { EnvConfigService } from '@/shared/infra/env-config/env-config.service'
import { EnvConfigModule } from '@/shared/infra/env-config/env-config.module'

describe('EnvConfigService unit tests', () => {
  let systemUnderTest: EnvConfigService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile()

    systemUnderTest = module.get<EnvConfigService>(EnvConfigService)
  })

  it('should be defined', () => {
    expect(systemUnderTest).toBeDefined()
  })

  it('should be return a PORT of application', () => {
    expect(systemUnderTest.getAppPort()).toBe(3001)
  })

  it('should be return NODE ENV of application', () => {
    expect(systemUnderTest.getNodeEnv()).toBe('test')
  })
})
