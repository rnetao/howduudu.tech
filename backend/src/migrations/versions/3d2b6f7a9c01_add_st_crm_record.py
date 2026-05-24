"""add st crm record

Revision ID: 3d2b6f7a9c01
Revises: f6e6aa108eab
Create Date: 2026-05-21 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "3d2b6f7a9c01"
down_revision = "f6e6aa108eab"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "st_crm_record",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("create_time", sa.DateTime(), nullable=True),
        sa.Column("update_time", sa.DateTime(), nullable=True),
        sa.Column("crm_id", sa.String(), nullable=True, comment="crm编号"),
        sa.Column("text", sa.String(), nullable=True, comment="文本"),
        sa.Column("type", sa.String(), nullable=True, comment="跟进类型，follow_up_type"),
        sa.Column("date", sa.String(), nullable=True, comment="记录的日期"),
        sa.Column("time", sa.TIMESTAMP(timezone=True), nullable=True, comment="时间戳"),
        sa.Column("name", sa.String(), nullable=True, comment="记录的人"),
        sa.Column("origin", sa.String(), nullable=True, comment="原始数据"),
        sa.Column("detail", sa.String(), nullable=True, comment="查询文本"),
        sa.PrimaryKeyConstraint("id"),
        comment="顺腾crm 跟进记录",
    )


def downgrade() -> None:
    op.drop_table("st_crm_record")
