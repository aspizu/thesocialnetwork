from redis import Redis
from reproca import create_starlette_application, generate_typescript_bindings, method
from reproca.sessions.redis_sessions import RedisSessions

redis = Redis()
sessions = RedisSessions(redis)


@method
async def hello() -> str:
    return "Hello, World! from reproca"


app = create_starlette_application(sessions, base="/api/")
generate_typescript_bindings("../frontend/src/services/api.gen.ts")
