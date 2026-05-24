import datetime
from typing import Optional

from sqlalchemy import Column, DateTime, Integer, String, TIMESTAMP
from sqlmodel import Field, SQLModel


class StCrmRecord(SQLModel, table=True):
    __tablename__ = "st_crm_record"
    __table_args__ = {"comment": "顺腾crm 跟进记录"}

    id: Optional[int] = Field(
        default=None,
        sa_column=Column(Integer, primary_key=True, autoincrement=True),
    )
    create_time: Optional[datetime.datetime] = Field(
        default_factory=datetime.datetime.now,
        sa_column=Column(DateTime),
    )
    update_time: Optional[datetime.datetime] = Field(
        default=None,
        sa_column=Column(DateTime, onupdate=datetime.datetime.now),
    )
    crm_id: Optional[str] = Field(
        default=None,
        sa_column=Column(String, comment="crm编号"),
    )
    text: Optional[str] = Field(
        default=None,
        sa_column=Column(String, comment="文本"),
    )
    type: Optional[str] = Field(
        default=None,
        sa_column=Column(String, comment="跟进类型，follow_up_type"),
    )
    date: Optional[str] = Field(
        default=None,
        sa_column=Column(String, comment="记录的日期"),
    )
    time: Optional[datetime.datetime] = Field(
        default=None,
        sa_column=Column(TIMESTAMP(timezone=True), comment="时间戳"),
    )
    name: Optional[str] = Field(
        default=None,
        sa_column=Column(String, comment="记录的人"),
    )
    origin: Optional[str] = Field(
        default=None,
        sa_column=Column(String, comment="原始数据"),
    )
    detail: Optional[str] = Field(
        default=None,
        sa_column=Column(String, comment="查询文本"),
    )
