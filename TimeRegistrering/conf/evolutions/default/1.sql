# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table arbeid (
  id                        bigint auto_increment not null,
  ansatt_nr                 bigint,
  dato                      varchar(255),
  arbeid                    varchar(255),
  timer                     double,
  overtid                   boolean,
  kommentar                 varchar(255),
  constraint pk_arbeid primary key (id))
;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists arbeid;

SET REFERENTIAL_INTEGRITY TRUE;

