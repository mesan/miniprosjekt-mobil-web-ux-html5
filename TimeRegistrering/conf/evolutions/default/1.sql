# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table arbeid (
  ansatt_nr                 bigint auto_increment not null,
  dato                      timestamp,
  arbeid                    varchar(255),
  timer                     double,
  overtid                   boolean,
  constraint pk_arbeid primary key (ansatt_nr))
;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists arbeid;

SET REFERENTIAL_INTEGRITY TRUE;

