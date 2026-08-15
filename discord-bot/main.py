import os
from dotenv import load_dotenv
from api.server import keep_alive
from api.routes import register_routes
from core.bot import MyClient
from features.commands import register_default_commands
from features.reactions import ReactionManager

load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

if __name__ == '__main__':
    client = MyClient()
    register_routes(client)
    keep_alive()
    reaction_manager = ReactionManager(client)
    register_default_commands(client.command_engine, reaction_manager)
    client.reaction_manager = reaction_manager
    
    token = os.getenv('DISCORD_TOKEN')
    if token:
        try:
            client.run(token)
        except Exception:
            pass
