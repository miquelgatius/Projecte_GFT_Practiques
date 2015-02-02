/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package funator;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author megs
 */
@Entity
@Table(name = "usuaris")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Usuaris.findAll", query = "SELECT u FROM Usuaris u"),
    @NamedQuery(name = "Usuaris.findByUserId", query = "SELECT u FROM Usuaris u WHERE u.userId = :userId"),
    @NamedQuery(name = "Usuaris.findByPass", query = "SELECT u FROM Usuaris u WHERE u.pass = :pass")})
public class Usuaris implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "user_id")
    private String userId;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 32)
    @Column(name = "pass")
    private String pass;

    public Usuaris() {
    }

    public Usuaris(String userId) {
        this.userId = userId;
    }

    public Usuaris(String userId, String pass) {
        this.userId = userId;
        this.pass = pass;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (userId != null ? userId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Usuaris)) {
            return false;
        }
        Usuaris other = (Usuaris) object;
        if ((this.userId == null && other.userId != null) || (this.userId != null && !this.userId.equals(other.userId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "funator.Usuaris[ userId=" + userId + " ]";
    }
    
}
