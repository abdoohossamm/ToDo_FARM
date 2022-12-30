from uuid import uuid4

from pydantic import BaseModel, Field
from pydantic.types import UUID


class Todo(BaseModel):
    title: str = Field(
        title="The title of the TODO item", max_length=255
    )
    description: str | None = Field(
        default=None, title="The description of the TODO item", description="The description of the TODO item",max_length=255
    )
