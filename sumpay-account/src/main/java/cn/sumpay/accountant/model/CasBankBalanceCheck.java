package cn.sumpay.accountant.model;

import java.math.BigDecimal;

public class CasBankBalanceCheck {
    private String id;

    private String balanceDate;

    private BigDecimal preBalance;

    private BigDecimal dayDebtorAmount;

    private BigDecimal dayCreditorAmount;

    private BigDecimal dayCertificate;

    private BigDecimal endBalance;

    private BigDecimal bankBalance;

    private BigDecimal diffAmount;

    private String checkAccountStatus;

    private String modifyTime;

    private String modifyUserId;

    private String bankId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBalanceDate() {
        return balanceDate;
    }

    public void setBalanceDate(String balanceDate) {
        this.balanceDate = balanceDate;
    }

    public BigDecimal getPreBalance() {
        return preBalance;
    }

    public void setPreBalance(BigDecimal preBalance) {
        this.preBalance = preBalance;
    }

    public BigDecimal getDayDebtorAmount() {
        return dayDebtorAmount;
    }

    public void setDayDebtorAmount(BigDecimal dayDebtorAmount) {
        this.dayDebtorAmount = dayDebtorAmount;
    }

    public BigDecimal getDayCreditorAmount() {
        return dayCreditorAmount;
    }

    public void setDayCreditorAmount(BigDecimal dayCreditorAmount) {
        this.dayCreditorAmount = dayCreditorAmount;
    }

    public BigDecimal getDayCertificate() {
        return dayCertificate;
    }

    public void setDayCertificate(BigDecimal dayCertificate) {
        this.dayCertificate = dayCertificate;
    }

    public BigDecimal getEndBalance() {
        return endBalance;
    }

    public void setEndBalance(BigDecimal endBalance) {
        this.endBalance = endBalance;
    }

    public BigDecimal getBankBalance() {
        return bankBalance;
    }

    public void setBankBalance(BigDecimal bankBalance) {
        this.bankBalance = bankBalance;
    }

    public BigDecimal getDiffAmount() {
        return diffAmount;
    }

    public void setDiffAmount(BigDecimal diffAmount) {
        this.diffAmount = diffAmount;
    }

    public String getCheckAccountStatus() {
        return checkAccountStatus;
    }

    public void setCheckAccountStatus(String checkAccountStatus) {
        this.checkAccountStatus = checkAccountStatus;
    }

    public String getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(String modifyTime) {
        this.modifyTime = modifyTime;
    }

    public String getModifyUserId() {
        return modifyUserId;
    }

    public void setModifyUserId(String modifyUserId) {
        this.modifyUserId = modifyUserId;
    }

    public String getBankId() {
        return bankId;
    }

    public void setBankId(String bankId) {
        this.bankId = bankId;
    }
}